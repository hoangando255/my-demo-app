import { ChangeDetectorRef, Component, OnInit, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from '../../../core/services/product.service';
import {FormsModule} from '@angular/forms';
import {CartService} from '../../../core/services/cart.service';

declare var bootstrap: any;
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit, AfterViewInit {
  private myModal:any;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading = true;

  selectedCategory = 'Tất cả';
  maxPrice = 2000;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef, public cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Dữ liệu chuẩn từ API:', data.products[0]);
        this.products = data.products;
        this.filteredProducts = data.products;
        this.isLoading = false;
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.error('Lỗi lấy hàng:', err);
        this.isLoading = false;
        this.cdr.detectChanges()
      }
    });
  }

  filterProducts(category: string = this.selectedCategory){
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(p => {
      const matchCategory = (category === 'Tất cả') || (p.category === this.selectedCategory);
      const matchPrice = p.price <= this.maxPrice;
      return matchCategory && matchPrice;
    });
  }
  ngAfterViewInit() {
    const modalElement = document.getElementById('cartModal');
    if (modalElement) {
      this.myModal = new bootstrap.Modal(modalElement, {
        backdrop: true,
        keyboard: true
      });
    }
  }

  openCart(){
    const modalElement = document.getElementsByClassName('cartModal');
    if (this.myModal) {
      this.myModal.show();
    } else{
      const modalElement = document.getElementById('cartModal');
      this.myModal = new bootstrap.Modal(modalElement);
      this.myModal.show();
    }
  }
  addToCart(product: any){
    this.cartService.addToCart(product);
  }
  goToCheckout(){
    console.log('Đang chuẩn bị sang trang thanh toán....');
    alert('Tính năng thanh toán đang được phát triển, xin chờ!');
  }
}

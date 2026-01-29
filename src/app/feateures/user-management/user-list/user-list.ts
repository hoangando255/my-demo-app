import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';
import {ChangeDetection} from '@angular/cli/lib/config/workspace-schema';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {
  users: any[] = [];
  isLoading = false;
  selectedUser: any ={};
  filteredUsers: any [] = [];
  searchText = '';
  modalTitle = '';
  modalMode = '';


  constructor(private userService: UserService,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.isLoading = true;


    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        this.isLoading = false;
        this.cdr.detectChanges()
        this.filteredUsers = data;
        console.log('Dữ liệu lấy về thành công:', this.users);
      },
      error: (err: any) => {
        console.error('Lỗi khi gọi API:', err);
        this.isLoading = false;
        this.cdr.detectChanges()
      },
      complete: () => {
        this.isLoading = false;
        this.cdr.detectChanges()
      }
    });
  }
  viewUser(user: any){
    this.modalMode = 'view';
    this.modalTitle= 'Chi tiết người dùng';
    this.selectedUser = {...user};
  }
  addUser(){
    this.modalMode = 'add';
    this.modalTitle= 'Thêm người dùng mới';
    this.selectedUser= {name: '', email: ''};
  }
  editUser(user: any){
    this.modalMode = 'edit';
    this.modalTitle = 'Chỉnh sửa thông tin';
    this.selectedUser = {...user};
  }
  deleteUser(id: number){
    const confirmDelete = confirm('Bạn có chắc muốn xóa người dùng này không?');
    if (confirmDelete){
      this.users = this.users.filter(user => user.id !== id);
      this.onSearch();
      console.log('Đã xóa thành công', id);
    }
  }
  onSearch(){
    const text = this.searchText.toLowerCase().trim();
    if(!text){
      this.filteredUsers = [...this.users];
      return;
    }
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(text) || user.email.toLowerCase().includes(text));
  }

  saveData(){
    if(this.modalMode === 'add') {
      const newUser = {
        ...this.selectedUser,
        id: this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) +1 : 1
      };
      this.users.push(newUser);
      console.log('Đã thêm mới:', newUser);
    } else if (this.modalMode === 'edit'){
      const index = this.users.findIndex( u => u.id === this.selectedUser.id);
      if (index !== -1){
        this.users[index] = {...this.selectedUser};
        console.log('Đã cập nhật id:', this.selectedUser.id);
      }
    }
    alert('Cập nhật thành công!');
  }
}

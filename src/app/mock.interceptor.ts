import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { products } from './mock-db';

export const mockInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.method === 'GET' && req.url === 'product-list') {
    return of(new HttpResponse({
      status: 200,
      body: {
        products: products,
        total: products.length,
      }
    }));
  }

  if (req.method === 'POST' && req.url === 'product-list') {
    const newProduct = {
      ...(req.body as any),
      id: Date.now()
    };

    products.push(newProduct);

    return of(new HttpResponse({
      status: 201,
      body: newProduct
    }));
  }

  return next(req);
};




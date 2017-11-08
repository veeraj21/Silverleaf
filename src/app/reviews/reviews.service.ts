import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {Review} from './review';

@Injectable()
export class ReviewsService {
  private basePath: string = '/reviews';
  reviews : FirebaseListObservable<Review[]>;
  review : FirebaseObjectObservable<Review>;
  reviewObj : Review;

  constructor(private afAuth:AngularFireAuth ,  private router:Router, private firedatabase : AngularFireDatabase) { 
    console.log("welcome called constructor");
  }
 
 createReview(rev: Review): void{
    this.reviews.push(rev);
  }

 getReviews(query={}): FirebaseListObservable<Review[]> {
    this.reviews = this.firedatabase.list(this.basePath, {
      query: {orderByChild: 'createdAt'}
    });
    return this.reviews;
  }

  getReview(key: string): FirebaseObjectObservable<Review> {
    const itemPath =  `${this.basePath}/${key}`;
    this.review = this.firedatabase.object(itemPath)
    return this.review;
  } 

  deleteReview(key: string): void {
     this.reviews.remove(key)
       .catch(error => this.handleError(error))
 }

 updateReviewLike($key:string, count: number): void {
     this.reviews.update($key,{likes:count})
       .catch(error => this.handleError(error))
 }

 deleteAllReviews(): void {
     this.reviews.remove().catch(error => this.handleError(error))
 }

 private handleError(error) {
   console.log(error)
 }

}

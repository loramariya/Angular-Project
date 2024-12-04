import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../shared/loader/loader.component';
import { ApiService } from '../api.service';
import { Comment } from '../types/comment';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent implements OnInit{
  comments: Comment[] = [];
  isLoading = true;

  constructor(private apiService: ApiService){}


  ngOnInit(): void {
    this.apiService.getComments().subscribe(comments => {
      this.comments = comments;
      this.isLoading = false;
    });
  }
}

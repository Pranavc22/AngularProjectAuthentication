import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './app/posts/post-list/post-list.component';
import { PostCreateComponent } from './app/posts/post-create/post-create.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './app/auth/login/login.component';
import { SignupComponent } from './app/auth/signup/signup.component';
import { AuthGuard } from './app/auth/auth.guard';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

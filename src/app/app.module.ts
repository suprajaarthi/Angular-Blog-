import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsAddComponent } from './posts-add/posts-add.component';


const appRoutes : Routes =[
{path:'hero',component:HomeComponent},
{path:'',component:AppComponent},
{path:'posts-add',component:PostsAddComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

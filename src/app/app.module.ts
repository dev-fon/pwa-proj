import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubServiceService } from './github-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    GithubServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { DonationBoxComponent } from './pages/donation-box/donation-box.component';
import { InfoComponent } from './pages/info/info.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HammerModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { TestComponent } from './components/test/test.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'donation-box', component: DonationBoxComponent },
  { path: 'information', component: InfoComponent },
  { path: 'wish-list', component: WishlistComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    HomeComponent,
    ChatComponent,
    DonationBoxComponent,
    InfoComponent,
    WishlistComponent,
    ProfileComponent,
    NavbarComponent,
    AddDialogComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule,
    MatInputModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
    MatFormFieldModule,
    HammerModule,
    FontAwesomeModule,
    MatCardModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }

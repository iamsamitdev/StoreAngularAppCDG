import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotpassComponent } from './pages/auth/forgotpass/forgotpass.component';
import { HeaderFrontendComponent } from './shared/frontend-shared/header-frontend/header-frontend.component';
import { FooterFrontendComponent } from './shared/frontend-shared/footer-frontend/footer-frontend.component';
import { HeaderBackendComponent } from './shared/backend-shared/header-backend/header-backend.component';
import { FooterBackendComponent } from './shared/backend-shared/footer-backend/footer-backend.component';
import { SidebarBackendComponent } from './shared/backend-shared/sidebar-backend/sidebar-backend.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { ReportComponent } from './pages/backend/report/report.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { SettingComponent } from './pages/backend/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    HeaderFrontendComponent,
    FooterFrontendComponent,
    HeaderBackendComponent,
    FooterBackendComponent,
    SidebarBackendComponent,
    DashboardComponent,
    StockComponent,
    ReportComponent,
    UsersComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

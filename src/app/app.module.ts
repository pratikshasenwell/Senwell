import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { FooterOneComponent } from './components/layouts/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/layouts/footer-two/footer-two.component';
import { FooterThreeComponent } from './components/layouts/footer-three/footer-three.component';
import { NewsSidebarComponent } from './components/layouts/news-sidebar/news-sidebar.component';
import { ServiceSidebarComponent } from './components/layouts/service-sidebar/service-sidebar.component';
import { ShopSidebarComponent } from './components/layouts/shop-sidebar/shop-sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceOneComponent } from './components/pages/service-one/service-one.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PortfolioOneComponent } from './components/pages/portfolio-one/portfolio-one.component';
import { PortfolioTwoComponent } from './components/pages/portfolio-two/portfolio-two.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { NewsGridComponent } from './components/pages/news-grid/news-grid.component';
import { NewsStandardComponent } from './components/pages/news-standard/news-standard.component';
import { NewsDetailComponent } from './components/pages/news-detail/news-detail.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { ProjectDetailComponent } from './components/pages/project-detail/project-detail.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { ReactNativeDeveloperComponent } from './components/pages/react-native-developer/react-native-developer.component';
import { BuisnessDevelopmentExecutiveComponent } from './components/pages/buisness-development-executive/buisness-development-executive.component';
import { PhpDeveloperComponent } from './components/pages/php-developer/php-developer.component';
import { AndroidDeveloperComponent } from './components/pages/android-developer/android-developer.component';
import { IosDeveloperComponent } from './components/pages/ios-developer/ios-developer.component';
import { BuisnessDevelopmentExecutiveUkComponent } from './components/pages/buisness-development-executive-uk/buisness-development-executive-uk.component';
import { AndroidDeveloperUkComponent } from './components/pages/android-developer-uk/android-developer-uk.component';
import { UiUxDesignerComponent } from './components/pages/ui-ux-designer/ui-ux-designer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { registerFirestore } from '@firebase/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupcComponent } from './components/pages/popupc/popupc.component';
import { AdminPanelComponent } from './components/pages/admin-panel/admin-panel.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    NewsSidebarComponent,
    ServiceSidebarComponent,
    ShopSidebarComponent,
    HomeComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    TeamComponent,
    PortfolioOneComponent,
    PortfolioTwoComponent,
    CareersComponent,
    NewsGridComponent,
    NewsStandardComponent,
    NewsDetailComponent,
    ContactComponent,
    ShopComponent,
    ShopDetailComponent,
    ProjectDetailComponent,
    ServiceDetailComponent,
    ReactNativeDeveloperComponent,
    BuisnessDevelopmentExecutiveComponent,
    PhpDeveloperComponent,
    AndroidDeveloperComponent,
    IosDeveloperComponent,
    BuisnessDevelopmentExecutiveUkComponent,
    AndroidDeveloperUkComponent,
    UiUxDesignerComponent,
    PopupcComponent,
    AdminPanelComponent,
    DashboardComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    
    MatCommonModule,
    MatDialogModule,
    
    

  ],
  providers: [
      Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

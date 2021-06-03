import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceOneComponent } from './components/pages/service-one/service-one.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { PortfolioOneComponent } from './components/pages/portfolio-one/portfolio-one.component';
import { PortfolioTwoComponent } from './components/pages/portfolio-two/portfolio-two.component';
import { ProjectDetailComponent } from './components/pages/project-detail/project-detail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { NewsGridComponent } from './components/pages/news-grid/news-grid.component';
import { NewsStandardComponent } from './components/pages/news-standard/news-standard.component';
import { NewsDetailComponent } from './components/pages/news-detail/news-detail.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { ReactNativeDeveloperComponent } from './components/pages/react-native-developer/react-native-developer.component';
import { BuisnessDevelopmentExecutiveComponent } from './components/pages/buisness-development-executive/buisness-development-executive.component';
import { PhpDeveloperComponent } from './components/pages/php-developer/php-developer.component';
import { AndroidDeveloperComponent } from './components/pages/android-developer/android-developer.component';
import { BuisnessDevelopmentExecutiveUkComponent } from './components/pages/buisness-development-executive-uk/buisness-development-executive-uk.component';
import { AndroidDeveloperUkComponent } from './components/pages/android-developer-uk/android-developer-uk.component';
import { IosDeveloperComponent } from './components/pages/ios-developer/ios-developer.component';
import { UiUxDesignerComponent } from './components/pages/ui-ux-designer/ui-ux-designer.component';
import { NgxCaptchaModule } from 'ngx-captcha';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home-two',component:HomeTwoComponent},
  {path:'home-three',component:HomeThreeComponent},
  {path:'about',component:AboutComponent},
  {path:'service-1',component:ServiceOneComponent},
  {path:'service-2',component:ServiceTwoComponent},
  {path:'service-detail',component:ServiceDetailComponent},
  {path:'portfolio-1',component:PortfolioOneComponent},
  {path:'portfolio-2',component:PortfolioTwoComponent},
  {path:'project-detail',component:ProjectDetailComponent},
  {path:'shop',component:ShopComponent},
  {path:'shop-detail',component:ShopDetailComponent},
  {path:'news-grid',component:NewsGridComponent},
  {path:'news-standard',component:NewsStandardComponent},
  {path:'news-detail',component:NewsDetailComponent},
  {path:'team',component:TeamComponent},
  {path:'careers',component:CareersComponent},
  {path:'contact',component:ContactComponent},
  {path:'ReactNativeDeveloperComponent',component:ReactNativeDeveloperComponent},
  {path:'BuisnessDevelopmentExecutiveComponent',component:BuisnessDevelopmentExecutiveComponent},
  {path:'PhpDeveloperComponent',component:PhpDeveloperComponent},
  {path:'AndroidDeveloperComponent',component:AndroidDeveloperComponent},
  {path:'BuisnessDevelopmentExecutiveUkComponent',component:BuisnessDevelopmentExecutiveUkComponent},
  {path:'AndroidDeveloperUkComponent',component:AndroidDeveloperUkComponent},
  {path:'IosDeveloperComponent',component:IosDeveloperComponent},
  {path:'UiUxDesignerComponent',component:UiUxDesignerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgxCaptchaModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

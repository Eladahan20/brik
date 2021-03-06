import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { AppComponent } from './app.component';
import { NavBannerComponent } from './nav-banner/nav-banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FornituresComponent } from './gallery/fornitures/fornitures.component';
import { AccessoriesComponent } from './gallery/accessories/accessories.component';
import { PlantsComponent } from './gallery/plants/plants.component';
import { CandlesComponent } from './gallery/candles/candles.component';
import { ClocksComponent } from './gallery/clocks/clocks.component';
import { GiftpacksComponent } from './gallery/giftpacks/giftpacks.component';
import { GlassesComponent } from './gallery/glasses/glasses.component';
import { HangingComponent } from './gallery/hanging/hanging.component';
import { MirrorsComponent } from './gallery/mirrors/mirrors.component';
import { PillowsComponent } from './gallery/pillows/pillows.component';
import { ImageFetcherService } from './image-fetcher.service';
import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact/contact.component';
import { MailerService} from './mailer.service';
const appRoutes: Routes = [
  { path: 'gallery',      component: GalleryComponent },
  { path: 'aboutus',      component: AboutusComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'gallery/fornitures', component: FornituresComponent},
  { path: 'gallery/accessories', component: AccessoriesComponent},
  { path: 'gallery/candles', component: CandlesComponent},
  { path: 'gallery/clocks', component: ClocksComponent},
  { path: 'gallery/giftpacks', component: GiftpacksComponent},
  { path: 'gallery/glasses', component: GlassesComponent},
  { path: 'gallery/hanging', component: HangingComponent},
  { path: 'gallery/mirrors', component: MirrorsComponent},
  { path: 'gallery/plants', component: PlantsComponent},
  { path: 'gallery/pillows', component: PillowsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBannerComponent,
    GalleryComponent,
    FooterComponent,
    AboutusComponent,
    FornituresComponent,
    AccessoriesComponent,
    PlantsComponent,
    CandlesComponent,
    ClocksComponent,
    GiftpacksComponent,
    GlassesComponent,
    HangingComponent,
    MirrorsComponent,
    PillowsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsjr7VvHLQC8f3os0g_uM5cElNujKFREk'
    }),
    ModalGalleryModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ImageFetcherService,
  MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

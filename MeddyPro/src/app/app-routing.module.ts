import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
   // pathMatch: 'prefix',
   // canActivate: [AuthGuard],
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then( m => m.DoctorPageModule)
  },
  {
    path: 'physician',
    loadChildren: () => import('./physician/physician.module').then( m => m.PhysicianPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'patient-details',
    loadChildren: () => import('./patient-details/patient-details.module').then( m => m.PatientDetailsPageModule)
  },
  {
    path: 'med',
    loadChildren: () => import('./med/med.module').then( m => m.MedPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'vet',
    loadChildren: () => import('./vet/vet.module').then( m => m.VetPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
 {
    path: 'babycare',
    loadChildren: () => import('./babycare/babycare.module').then( m => m.BabycarePageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./cart-modal/cart-modal.module').then( m => m.CartModalPageModule)

  },
  {
    path: 'appoinment',
    loadChildren: () => import('./appoinment/appoinment.module').then( m => m.AppoinmentPageModule)
  },
  {
    path: 'lablist',
    loadChildren: () => import('./lablist/lablist.module').then( m => m.LablistPageModule)
  },
  {
    path: 'add-to-cart',
    loadChildren: () => import('./pages/add-to-cart/add-to-cart.module').then( m => m.AddToCartPageModule)
  },
  {
    path: 'upi',
    loadChildren: () => import('./upi/upi.module').then( m => m.UpiPageModule)
  },
  {
    path: 'prisc',
    loadChildren: () => import('./prisc/prisc.module').then( m => m.PriscPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'calculation',
    loadChildren: () => import('./calculation/calculation.module').then( m => m.CalculationPageModule)
  },
  {
    path: 'petserve',
    loadChildren: () => import('./petserve/petserve.module').then( m => m.PetservePageModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./pets/pets.module').then( m => m.PetsPageModule)
  },

  {
    path: 'general',
    loadChildren: () => import('./general/general.module').then( m => m.GeneralPageModule)
  },
  {
    path: 'symtom',
    loadChildren: () => import('./symtom/symtom.module').then( m => m.SymtomPageModule)
  },
  {
    path: 'fever',
    loadChildren: () => import('./fever/fever.module').then( m => m.FeverPageModule)
  },
  {
    path: 'fatigue',
    loadChildren: () => import('./fatigue/fatigue.module').then( m => m.FatiguePageModule)
  },{
      path: 'book-test',
    loadChildren: () => import('./book-test/book-test.module').then( m => m.BookTestPageModule)
  },
  {
    path: 'cartview',
    loadChildren: () => import('./cartview/cartview.module').then( m => m.CartviewPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'apoint',
    loadChildren: () => import('./apoint/apoint.module').then( m => m.ApointPageModule)
  },
  {
    path: 'upi',
    loadChildren: () => import('./upi/upi.module').then( m => m.UpiPageModule)
  },
  {
    path: 'prisc',
    loadChildren: () => import('./prisc/prisc.module').then( m => m.PriscPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'calculation',
    loadChildren: () => import('./calculation/calculation.module').then( m => m.CalculationPageModule)
  },
  {
    path: 'petserve',
    loadChildren: () => import('./petserve/petserve.module').then( m => m.PetservePageModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./pets/pets.module').then( m => m.PetsPageModule)
  },

  {
    path: 'general',
    loadChildren: () => import('./general/general.module').then( m => m.GeneralPageModule)
  },
  {
    path: 'symtom',
    loadChildren: () => import('./symtom/symtom.module').then( m => m.SymtomPageModule)
  },
  {
    path: 'fever',
    loadChildren: () => import('./fever/fever.module').then( m => m.FeverPageModule)
  },
  {
    path: 'fatigue',
    loadChildren: () => import('./fatigue/fatigue.module').then( m => m.FatiguePageModule)
  },{
      path: 'book-test',
    loadChildren: () => import('./book-test/book-test.module').then( m => m.BookTestPageModule)
  },
  {
    path: 'cartview',
    loadChildren: () => import('./cartview/cartview.module').then( m => m.CartviewPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
  path: 'location',
  loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  },
  {
    path: 'apoint',
    loadChildren: () => import('./apoint/apoint.module').then( m => m.ApointPageModule)
  },
 {
    path: 'cartview1',
    loadChildren: () => import('./cartview1/cartview1.module').then( m => m.Cartview1PageModule)
  },
  {
    path: 'radiology',
    loadChildren: () => import('./radiology/radiology.module').then( m => m.RadiologyPageModule)
  },
  {
    path: 'body-checkup',
    loadChildren: () => import('./body-checkup/body-checkup.module').then( m => m.BodyCheckupPageModule)
  },
  {
    path: 'mri',
    loadChildren: () => import('./mri/mri.module').then( m => m.MriPageModule)
  },
  {
    path: 'mri-cartview',
    loadChildren: () => import('./mri-cartview/mri-cartview.module').then( m => m.MriCartviewPageModule)
  },
  {
    path: 'health-care',
    loadChildren: () => import('./health-care/health-care.module').then( m => m.HealthCarePageModule)
  },
  {
    path: 'babyproducts',
    loadChildren: () => import('./babyproducts/babyproducts.module').then( m => m.BabyproductsPageModule)
  },
  {
    path: 'trail',
    loadChildren: () => import('./trail/trail.module').then( m => m.TrailPageModule)
  },
  {
    path: 'doctor-list',
    loadChildren: () => import('./doctor-list/doctor-list.module').then( m => m.DoctorListPageModule)
  },
  {
    path: 'cartview2',
    loadChildren: () => import('./cartview2/cartview2.module').then( m => m.Cartview2PageModule)
  },
  {
    path: 'babypro',
    loadChildren: () => import('./babypro/babypro.module').then( m => m.BabyproPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'grands',
    loadChildren: () => import('./grands/grands.module').then( m => m.GrandsPageModule)
  },
  {
    path: 'cow-product',
    loadChildren: () => import('./cow-product/cow-product.module').then( m => m.CowProductPageModule)
  },
  {
    path: 'babysymptom',
    loadChildren: () => import('./babysymptom/babysymptom.module').then( m => m.BabysymptomPageModule)
  },
  {
  path: 'create',
  loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
},
{
  path: 'list',
  loadChildren: () => import('./list/list.module').then(m => m.ListPageModule),
   pathMatch: 'prefix',
  },

 {
  path: 'update/:id',
  loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },

  {
    path: 'appoint',
    loadChildren: () => import('./appoint/appoint.module').then( m => m.AppointPageModule)
  },

  {
    path: 'pharmalist',
    loadChildren: () => import('./pharmalist/pharmalist.module').then( m => m.PharmalistPageModule)
  },

  {
    path: 'pharmacreate',
    loadChildren: () => import('./pharmacreate/pharmacreate.module').then( m => m.PharmacreatePageModule)
  },

  {
    path: 'laboratorylist',
    loadChildren: () => import('./laboratorylist/laboratorylist.module').then( m => m.LaboratorylistPageModule)
  },

  {
    path: 'labupdate/:id',
    loadChildren: () => import('./labupdate/labupdate.module').then( m => m.LabupdatePageModule)
  },

  {
    path: 'labcreate',
    loadChildren: () => import('./labcreate/labcreate.module').then( m => m.LabcreatePageModule)
  },

  {
    path: 'cre',
    loadChildren: () => import('./cre/cre.module').then( m => m.CrePageModule)
  },

  {
    path: 'lis',
    loadChildren: () => import('./lis/lis.module').then( m => m.LisPageModule)
  },

  {
    path: 'view/:id',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },

  {
    path: 'upd/:id',
    loadChildren: () => import('./upd/upd.module').then( m => m.UpdPageModule)

  },

  {
    path: 'pharmaupdate/:id',
    loadChildren: () => import('./pharmaupdate/pharmaupdate.module').then( m => m.PharmaupdatePageModule)
  },

  {
    path: 'patient-form',
    loadChildren: () => import('./patient-form/patient-form.module').then( m => m.PatientFormPageModule)
  },

  {
    path: 'prescription',
    loadChildren: () => import('./prescription/prescription.module').then( m => m.PrescriptionPageModule)
  },

  {
    path: 'hpcreate',
    loadChildren: () => import('./hpcreate/hpcreate.module').then( m => m.HpcreatePageModule)
  },

  {
    path: 'cartview3',
    loadChildren: () => import('./cartview3/cartview3.module').then( m => m.Cartview3PageModule)
  },

  {
    path: 'order-medicine',
    loadChildren: () => import('./order-medicine/order-medicine.module').then( m => m.OrderMedicinePageModule)
  },

  {
    path: 'pmlist',
    loadChildren: () => import('./pmlist/pmlist.module').then( m => m.PmlistPageModule)
  },

  {
    path: 'lab-cartview',
    loadChildren: () => import('./lab-cartview/lab-cartview.module').then( m => m.LabCartviewPageModule)
  },

  {
    path: 'view1/:id',
    loadChildren: () => import('./view1/view1.module').then( m => m.View1PageModule)
  },

  {
    path: 'vetpatient',
    loadChildren: () => import('./vetpatient/vetpatient.module').then( m => m.VetpatientPageModule)
  },

  {
    path: 'vetpatientform',
    loadChildren: () => import('./vetpatientform/vetpatientform.module').then( m => m.VetpatientformPageModule)
  },
  {
    path: 'body-cartview',
    loadChildren: () => import('./body-cartview/body-cartview.module').then( m => m.BodyCartviewPageModule)
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'docreg',
    loadChildren: () => import('./docreg/docreg.module').then( m => m.DocregPageModule)
  },

  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then( m => m.DoctorsPageModule)
  },

  {
    path: 'petform',
    loadChildren: () => import('./petform/petform.module').then( m => m.PetformPageModule)
  },

  {
    path: 'tupage',
    loadChildren: () => import('./tupage/tupage.module').then( m => m.TupagePageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },  {
    path: 'complet-appoint',
    loadChildren: () => import('./complet-appoint/complet-appoint.module').then( m => m.CompletAppointPageModule)
  }










];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


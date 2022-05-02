import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
//import { TempdrivenFormComponent } from "./tempdriven-form/tempdriven-form.component";

const routes = [
    { path: '', redirectTo: '/reactive-form', pathMatch: 'full'},
    { path: 'reactive-form', component: ReactiveFormComponent},
    //{ path: 'td-form', component: TempdrivenFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';


// Not Found Component
// import {NotFoundComponent} from './not-found/not-found.component';

/**
 * Fallback to this route when no prior route is matched.
 */
// const routes: Routes = [
//   {
//     path: '**',
//     component: NotFoundComponent
//   }
// ];
const MFE_APP_URL = "http://localhost:4300/remoteEntry.js"

const routes: Routes = [
  {path:'not-found',
  loadChildren: () => {
    return loadRemoteModule({
      remoteEntry: MFE_APP_URL,
      remoteName: "mfeApp",
      exposedModule: "./NotFoundModule",
    }).then(m => m.NotFoundModule).catch(err => console.log(err));
  }
}

];

/**
 * App Routing Module.
 *
 * Configures the fallback route.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

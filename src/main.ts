import './polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NgbdPopoverBasicModule} from './app/popover-basic.module';

platformBrowserDynamic()
    .bootstrapModule(NgbdPopoverBasicModule)
    .then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;

      // Otherwise, log the boot error
    })
    .catch(err => console.error(err));

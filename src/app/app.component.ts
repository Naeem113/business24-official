import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsService } from './core/services/icons.service';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Define Variables
  direction: 'ltr' | 'rtl' = 'ltr';

  // Inject the services
  translate: TranslateService = inject(TranslateService);
  iconsService: IconsService = inject(IconsService);

  constructor() {
    this.translate.setDefaultLang('en');
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  standalone: true,
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {
  }

  transform(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

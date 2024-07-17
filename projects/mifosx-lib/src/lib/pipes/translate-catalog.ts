import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateCatalog'
})
export class TranslateCatalog implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // Implement your translation logic here or may be other service
    return this.translate(value);
  }

  private translate(key: string): string {
    const translations = {
      'exampleKey': 'Example Translation',
      // Add your key-value pairs for translations here
    };

    return translations[key] || key;
  }
}

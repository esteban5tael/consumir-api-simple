import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'is-error',
  imports: [],
  template: `
    <div class="error-container" role="alert">
      <div class="error-icon">⚠️</div>
      <span class="error-text">¡Ups! Ocurrió Un Error Al Cargar Los Datos</span>
    </div>
  `,
  styles: [
    `
      .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2.5rem;
        margin: 2.5rem;
        background-color: #ffebee;
        border: 1px solid #ef5350;
        border-radius: 8px;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          sans-serif;
      }

      .error-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.8;
      }

      .error-text {
        color: #c62828;
        font-size: 1rem;
        font-weight: 500;
      }

      /* Dark theme support */
      @media (prefers-color-scheme: dark) {
        .error-container {
          background-color: #3f1a1a;
          border-color: #e57373;
        }

        .error-text {
          color: #ef9a9a;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsErrorComponent {}

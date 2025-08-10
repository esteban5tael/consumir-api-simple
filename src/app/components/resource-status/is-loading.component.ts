import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'is-loading',
  imports: [],
  template: `
    <div class="loading-container">
      <div class="spinner"></div>
      <span class="loading-text">Cargando Datos ...</span>
    </div>
  `,
  styles: [
    `
      .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2.5rem;
        margin: 2.5rem;
        background-color: #e1f5fe;
        border: 1px solid #4fc3f7;
        border-radius: 8px;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          sans-serif;
      }

      .spinner {
        width: 3rem;
        height: 3rem;
        border: 4px solid #e3f2fd;
        border-top: 4px solid #1976d2;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
      }

      .loading-text {
        color: #1565c0;
        font-size: 1rem;
        font-weight: 500;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      /* Dark theme support */
      @media (prefers-color-scheme: dark) {
        .loading-container {
          background-color: #263238;
          border-color: #546e7a;
        }

        .spinner {
          border-color: #37474f;
          border-top-color: #64b5f6;
        }

        .loading-text {
          color: #90caf9;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsLoadingComponent {}

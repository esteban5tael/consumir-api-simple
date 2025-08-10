import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'is-empty',
  imports: [],
  template: `
    <div class="empty-container" role="alert">
      <div class="empty-icon">📭</div>
      <span class="empty-text">No Hay Datos Para Mostrar</span>
    </div>
  `,
  styles: [
    `
      .empty-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2.5rem;
        margin: 2.5rem;
        background-color: #fff3e0;
        border: 1px solid #ffb74d;
        border-radius: 8px;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          sans-serif;
      }

      .empty-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.7;
      }

      .empty-text {
        color: #e65100;
        font-size: 1rem;
        font-weight: 500;
      }

      /* Dark theme support */
      @media (prefers-color-scheme: dark) {
        .empty-container {
          background-color: #3e2723;
          border-color: #8d6e63;
        }

        .empty-text {
          color: #ffab91;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsEmptyComponent {}

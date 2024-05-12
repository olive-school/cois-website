// add lit-component snippet
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
@customElement("app-home")
export class AppHome extends LitElement {
  static styles = css`
    .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1ch;
      height: 100%;
    }
    .cm-margin {
      margin: 0px 30%;
    }
    .title {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.25px;
      color: #000000;
    }
    .h4light {
      font-family: Inter;
      font-style: normal;
      font-weight: 300;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.25px;
      color: #000000;
    }
    .susbtitle {
      font-family: Inter;
      font-style: normal;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.5px;
      color: #000000;
    }
    .divider {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
    .sm-height {
      height: 2vh;
    }
    .m-height {
      height: 5vh;
    }
    .m-f-weight {
      font-weight: 500;
    }
    .l-f-weight {
      font-weight: 600;
    }
    @media (max-width: 800px) {
      .cm-margin {
        margin: 20px;
      }
      img {
        width: 500px;
      }
    }
  `;
  @property()
  name = "World";
  render() {
    return html`
      <header class="center">
        <h6 class="title">OLIVE | IB World School</h6>
      </header>
      <div class="divider"></div>
      <section class="center cm-margin">
        <img src="./assets/logo.png" style="height:300px" alt="Coming soon" />

        <div class="susbtitle">
          <div class="susbtitle l-f-weight">OLIVE | IB World School</div>
          <div class="sm-height"></div>
          <div class="susbtitle ">
            IB World Schools offer a rigorous and challenging curriculum that
            prepares students for success in college and beyond.
          </div>
          <div class="sm-height"></div>

          <div class="m-f-weight">School Address</div>
          Plot No. 126, 127,<br />
          Bhadaj road, Ranchhodpura Ahmedabad, Gujarat 380058<br />
          <b
            ><a style="color: #007bff" href="https://g.co/kgs/64iXum"
              >Direction</a
            ></b
          ><br />
          <div style="height:2vh"></div>
          Email: <a href="mailto:info@olive.school">info@olive.school</a><br />
          Contact: <a href="tel:+919099933804">+919099933804</a> <br />
        </div>
      </section>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "app-home": AppHome;
  }
}

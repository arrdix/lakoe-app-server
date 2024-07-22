import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "lakoeapp@gmail.com",
    pass: "ofjb wikh xmth jvrw",
  },
});

export async function mailer(email) {
  const info = await transporter.sendMail({
    from: '"Lakoe App" <lakoeapp@gmail.com>',
    to: email,
    subject: "Reset Password",
    text: "Are you sure to reset password?",
    html: `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta name="x-apple-disable-message-reformatting" />
    <meta
      http-equiv="Content-Type"
      content="text/html; charset=UTF-8"
    />
    <meta
      name="color-scheme"
      content="light dark"
    />
    <meta
      name="supported-color-schemes"
      content="light dark"
    />
    <title></title>
    <style
      type="text/css"
      rel="stylesheet"
      media="all"
    >
      /* Base ------------------------------ */
      @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
      body {
        width: 100% !important;
        height: 100%;
        margin: 0;
        -webkit-text-size-adjust: none;
      }

      a {
        color: #fff;
      }

      a img {
        border: none;
      }

      td {
        word-break: break-word;
      }

      .preheader {
        display: none !important;
        visibility: hidden;
        mso-hide: all;
        font-size: 1px;
        line-height: 1px;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
      }
      /* Type ------------------------------ */

      body,
      td,
      th {
        font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      }

      h1 {
        margin-top: 0;
        color: #333333;
        font-size: 22px;
        font-weight: bold;
        text-align: left;
      }

      h2 {
        margin-top: 0;
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }

      h3 {
        margin-top: 0;
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
      }

      td,
      th {
        font-size: 16px;
      }

      p,
      ul,
      ol,
      blockquote {
        margin: 0.4em 0 1.1875em;
        font-size: 16px;
        line-height: 1.625;
      }

      p.sub {
        font-size: 13px;
      }
      /* Utilities ------------------------------ */

      .align-right {
        text-align: right;
      }

      .align-left {
        text-align: left;
      }

      .align-center {
        text-align: center;
      }

      .u-margin-bottom-none {
        margin-bottom: 0;
      }
      /* Buttons ------------------------------ */

      .button {
        background-color: #3869d4;
        border-top: 10px solid #3869d4;
        border-right: 18px solid #3869d4;
        border-bottom: 10px solid #3869d4;
        border-left: 18px solid #3869d4;
        display: inline-block;
        color: #fff;
        text-decoration: none;
        border-radius: 3px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
        -webkit-text-size-adjust: none;
        box-sizing: border-box;
      }

      .button--green {
        background-color: #0086b4;
        border-top: 10px solid #0086b4;
        border-right: 18px solid #0086b4;
        border-bottom: 10px solid #0086b4;
        border-left: 18px solid #0086b4;
      }

      .button--green:hover {
        background-color: #029acf;
        border-top: 10px solid #029acf;
        border-right: 18px solid #029acf;
        border-bottom: 10px solid #029acf;
        border-left: 18px solid #029acf;
      }

      .button--red {
        background-color: #ff6136;
        border-top: 10px solid #ff6136;
        border-right: 18px solid #ff6136;
        border-bottom: 10px solid #ff6136;
        border-left: 18px solid #ff6136;
      }

      @media only screen and (max-width: 500px) {
        .button {
          width: 100% !important;
          text-align: center !important;
        }
      }
      /* Attribute list ------------------------------ */

      .attributes {
        margin: 0 0 21px;
      }

      .attributes_content {
        background-color: #f4f4f7;
        padding: 16px;
      }

      .attributes_item {
        padding: 0;
      }
      /* Related Items ------------------------------ */

      .related {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .related_item {
        padding: 10px 0;
        color: #cbcccf;
        font-size: 15px;
        line-height: 18px;
      }

      .related_item-title {
        display: block;
        margin: 0.5em 0 0;
      }

      .related_item-thumb {
        display: block;
        padding-bottom: 10px;
      }

      .related_heading {
        border-top: 1px solid #cbcccf;
        text-align: center;
        padding: 25px 0 10px;
      }
      /* Discount Code ------------------------------ */

      .discount {
        width: 100%;
        margin: 0;
        padding: 24px;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #f4f4f7;
        border: 2px dashed #cbcccf;
      }

      .discount_heading {
        text-align: center;
      }

      .discount_body {
        text-align: center;
        font-size: 15px;
      }
      /* Social Icons ------------------------------ */

      .social {
        width: auto;
      }

      .social td {
        padding: 0;
        width: auto;
      }

      .social_icon {
        height: 20px;
        margin: 0 8px 10px 8px;
        padding: 0;
      }
      /* Data table ------------------------------ */

      .purchase {
        width: 100%;
        margin: 0;
        padding: 35px 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .purchase_content {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .purchase_item {
        padding: 10px 0;
        color: #51545e;
        font-size: 15px;
        line-height: 18px;
      }

      .purchase_heading {
        padding-bottom: 8px;
        border-bottom: 1px solid #eaeaec;
      }

      .purchase_heading p {
        margin: 0;
        color: #85878e;
        font-size: 12px;
      }

      .purchase_footer {
        padding-top: 15px;
        border-top: 1px solid #eaeaec;
      }

      .purchase_total {
        margin: 0;
        text-align: right;
        font-weight: bold;
        color: #333333;
      }

      .purchase_total--label {
        padding: 0 15px 0 0;
      }

      body {
        background-color: #f2f4f6;
        color: #51545e;
      }

      p {
        color: #51545e;
      }

      .email-wrapper {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #000;
      }

      .email-content {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      /* Masthead ----------------------- */

      .email-masthead {
        padding: 25px 0;
        text-align: center;
      }

      .email-masthead_logo {
        width: 94px;
      }

      .email-masthead_name {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        text-shadow: 0 1px 0 white;
      }
      /* Body ------------------------------ */

      .email-body {
        width: 100%;
        margin: 0;
        padding: 30px 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #ffffff;
      }

      .email-body_inner {
        max-width: 600px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .email-footer {
        width: 100%;
        margin: 0;
        padding: 25px 0;
        font-weight: bold;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #000;
      }

      .email-footer_inner {
        max-width: 600px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .email-footer p {
        color: #fff;
        font-size: 12px;
        text-align: center;
        margin: 0;
      }

      .text-danger {
        padding-top: 20px;
      }
    </style>
  </head>
  <body style>
    <span class="preheader">Are you sure to reset your password?</span>
    <table
      class="email-wrapper"
      width="100%"
      cellpadding="0"
      cellspacing="0"
    >
      <tr>
        <td>
          <table
            class="email-content"
            width="100%"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td class="email-masthead">
                <a
                  href="#"
                  style="
                    color: white;
                    font-weight: bold;
                    font-size: 20px;
                    text-decoration: none;
                  "
                >
                  Lakoe App
                </a>
              </td>
            </tr>
            <tr>
              <td
                class="email-body"
                width="100%"
              >
                <table
                  class="email-body_inner"
                  align="center"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td class="content-cell">
                      <h1>Reset Your Password</h1>
                      <p>
                        We received a request to reset your password. Click the
                        link below to choose a new one for your account security
                        and protection.
                      </p>
                      <table
                        class="action"
                        align="center"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <tr>
                          <td align="center">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                            >
                              <tr>
                                <td>
                                  <a
                                    href="http://localhost:5173/auth/forgot"
                                    style="
                                      padding: 10px 25px;
                                      background-color: #0086b4;
                                      border-radius: 5px;
                                      color: white;
                                      font-size: 15px;
                                      text-decoration: none;
                                    "
                                  >
                                    Reset Password
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <p class="text-danger">
                        If you did not request this change, please ignore this
                        email.
                      </p>
                      <p>
                        Thanks,
                        <br />
                        The Lakoe App Team
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  class="email-footer"
                  align="center"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td class="email-footer_inner">
                      <p>&copy; 2024 Lakoe App. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
  });
}

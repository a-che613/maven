import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

/* ============================
   Email Transporter (Zoho)
============================ */
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "support@mavenrnvn.com",
    pass: "9B466UMUziVU", // Zoho app password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/* ============================
   Admin Order Notification Template
============================ */
const createAdminOrderEmail = ({
  orderNumber,
  customer,
  items,
  total,
  paymentMethod
}: {
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    image?: string;
  }>;
  total: number;
  paymentMethod: string;
}) => {
  const paymentMethodText = {
    'bank-transfer': 'Bank Transfer',
    'btc-wallet': 'BTC Wallet',
    'gift-card': 'Gift Card'
  }[paymentMethod] || paymentMethod;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; background: #f9fafb; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
        .header { background: #111827; color: #ffffff; padding: 24px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 24px; }
        .section { margin-bottom: 24px; }
        .section-title { font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; }
        .customer-info { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
        .info-item { margin-bottom: 8px; }
        .info-label { font-weight: 500; color: #4b5563; margin-bottom: 4px; }
        .info-value { color: #111827; }
        .order-items { width: 100%; border-collapse: collapse; margin-top: 8px; }
        .order-items th { text-align: left; background-color: #f9fafb; padding: 12px; font-size: 14px; color: #4b5563; border-bottom: 1px solid #e5e7eb; }
        .order-items td { padding: 16px 12px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .item-name { font-weight: 500; color: #111827; }
        .item-quantity, .item-price { color: #4b5563; }
        .order-totals { margin-top: 24px; text-align: right; }
        .total-row { display: flex; justify-content: space-between; max-width: 200px; margin-left: auto; padding: 8px 0; }
        .total-label { color: #4b5563; }
        .total-value { font-weight: 600; color: #111827; }
        .grand-total { font-size: 18px; border-top: 2px solid #e5e7eb; margin-top: 8px; padding-top: 12px; }
        .footer { background-color: #f9fafb; padding: 16px 24px; text-align: center; color: #6b7280; font-size: 14px; }
        .order-number { background-color: #f0fdf4; color: #065f46; padding: 4px 8px; border-radius: 4px; font-weight: 500; font-size: 14px; display: inline-block; margin-bottom: 16px; }
        .payment-method { display: inline-block; background-color: #eff6ff; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 14px; margin-top: 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Order Received</h1>
        </div>

        <div class="content">
          <div class="order-number">Order #${orderNumber}</div>
          
          <div class="section">
            <div class="section-title">Customer Information</div>
            <div class="customer-info">
              <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${customer.name}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${customer.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">${customer.phone}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Payment Method</div>
                <div class="info-value">${paymentMethodText}</div>
              </div>
            </div>
            <div class="info-item">
              <div class="info-label">Shipping Address</div>
              <div class="info-value">${customer.address.replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Order Details</div>
            <table class="order-items">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${items.map(item => `
                  <tr>
                    <td class="item-name">${item.name}</td>
                    <td class="item-quantity">${item.quantity}</td>
                    <td class="item-price">$${item.price.toFixed(2)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="order-totals">
            <div class="total-row">
              <span class="total-label">Subtotal:</span>
              <span class="total-value">$${total.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span class="total-label">Shipping:</span>
              <span class="total-value">$0.00</span>
            </div>
            <div class="total-row grand-total">
              <span class="total-label">Total:</span>
              <span class="total-value">$${total.toFixed(2)}</span>
            </div>
            <div class="payment-method">
              ${paymentMethodText} Payment
            </div>
          </div>
        </div>

        <div class="footer">
          <p>This order was placed on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          <p>Please process this order and contact the customer for next steps.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/* ============================
   Customer Order Confirmation Template
============================ */
const createCustomerConfirmationEmail = ({
  orderNumber,
  customerName,
  items,
  total,
  paymentMethod
}: {
  orderNumber: string;
  customerName: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  paymentMethod: string;
}) => {
  const paymentMethodText = {
    'bank-transfer': 'Bank Transfer',
    'btc-wallet': 'BTC Wallet',
    'gift-card': 'Gift Card'
  }[paymentMethod] || paymentMethod;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; background: #f9fafb; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
        .header { background: #111827; color: #ffffff; padding: 24px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 24px; }
        .thank-you { font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; }
        .order-number { background-color: #f0fdf4; color: #065f46; padding: 4px 8px; border-radius: 4px; font-weight: 500; font-size: 14px; display: inline-block; margin-bottom: 16px; }
        .section { margin-bottom: 24px; }
        .section-title { font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; }
        .order-items { width: 100%; border-collapse: collapse; margin-top: 8px; }
        .order-items th { text-align: left; background-color: #f9fafb; padding: 12px; font-size: 14px; color: #4b5563; border-bottom: 1px solid #e5e7eb; }
        .order-items td { padding: 16px 12px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .item-name { font-weight: 500; color: #111827; }
        .item-quantity, .item-price { color: #4b5563; }
        .order-totals { margin-top: 24px; text-align: right; }
        .total-row { display: flex; justify-content: space-between; max-width: 200px; margin-left: auto; padding: 8px 0; }
        .total-label { color: #4b5563; }
        .total-value { font-weight: 600; color: #111827; }
        .grand-total { font-size: 18px; border-top: 2px solid #e5e7eb; margin-top: 8px; padding-top: 12px; }
        .footer { background-color: #f9fafb; padding: 24px; text-align: center; color: #6b7280; font-size: 14px; line-height: 1.6; }
        .payment-method { display: inline-block; background-color: #eff6ff; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 14px; margin-top: 8px; }
        .next-steps { background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 12px 16px; margin: 16px 0; border-radius: 0 4px 4px 0; }
        .next-steps-title { font-weight: 600; color: #1e40af; margin-bottom: 8px; }
        .next-steps-list { margin: 0; padding-left: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank you for your order!</h1>
        </div>

        <div class="content">
          <p class="thank-you">Hi ${customerName},</p>
          <p>We've received your order and it's being processed. You'll receive another email once your items are on their way.</p>
          
          <div class="order-number">Order #${orderNumber}</div>
          
          <div class="section">
            <div class="section-title">Order Summary</div>
            <table class="order-items">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${items.map(item => `
                  <tr>
                    <td class="item-name">${item.name}</td>
                    <td class="item-quantity">${item.quantity}</td>
                    <td class="item-price">$${item.price.toFixed(2)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="order-totals">
            <div class="total-row">
              <span class="total-label">Subtotal:</span>
              <span class="total-value">$${total.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span class="total-label">Shipping:</span>
              <span class="total-value">$0.00</span>
            </div>
            <div class="total-row grand-total">
              <span class="total-label">Total:</span>
              <span class="total-value">$${total.toFixed(2)}</span>
            </div>
            <div class="payment-method">
              ${paymentMethodText} Payment
            </div>
          </div>

          <div class="next-steps">
            <div class="next-steps-title">What's Next?</div>
            <ul class="next-steps-list">
              <li>We'll process your order within 24 hours</li>
              <li>You'll receive a shipping confirmation with tracking information</li>
              <li>For any questions, reply to this email or contact our support</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>Thank you for shopping with us!</p>
          <p>If you have any questions about your order, please don't hesitate to contact our customer service team.</p>
          <p>© ${new Date().getFullYear()} Maven. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/* ============================
   POST Handler
============================ */
export async function POST(request: Request) {
  try {
    const { customer, items, total } = await request.json();

    if (!customer || !items?.length || total === undefined) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    // Generate order number (e.g., ORD-123456)
    const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const paymentMethod = customer.paymentMethod || 'bank-transfer';

    // 1. Send order notification to admin
    const adminSubject = `New Order #${orderNumber} - $${total.toFixed(2)}`;
    const adminHtml = createAdminOrderEmail({
      orderNumber,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
      },
      items,
      total,
      paymentMethod,
    });

    const adminMailOptions = {
      from: `"Maven Orders" <support@mavenrnvn.com>`,
      to: "azienwi.che@gmail.com",
      bcc: "support@mavenrnvn.com",
      subject: adminSubject,
      html: adminHtml,
    };

    // Verify and send admin email
    await transporter.verify();
    const adminInfo = await transporter.sendMail(adminMailOptions);
    
    if (!adminInfo.accepted || adminInfo.accepted.length === 0) {
      console.error("Admin email not accepted by SMTP server:", adminInfo);
      // Don't fail the request, just log the error
    }

    // 2. Send order confirmation to customer
    try {
      const customerMailOptions = {
        from: '"Maven Orders" <support@mavenrnvn.com>',
        to: customer.email,
        subject: `Your Order #${orderNumber} Confirmation`,
        html: createCustomerConfirmationEmail({
          orderNumber,
          customerName: customer.name,
          items,
          total,
          paymentMethod,
        }),
      };
      
      await transporter.sendMail(customerMailOptions);
    } catch (emailError) {
      console.error('Failed to send customer confirmation email:', emailError);
      // Don't fail the request if email sending fails
    }

    // 3. Clear cart cookie
    const response = NextResponse.json({ 
      success: true, 
      orderNumber,
      message: 'Order placed successfully' 
    });
    
    // Clear cart cookie
    response.cookies.set("cart", "[]", { path: "/" });

    return response;
  } catch (error: any) {
    console.error("Checkout email error:", error);
    return NextResponse.json(
      { error: "Failed to process checkout", details: error.message },
      { status: 500 }
    );
  }
}

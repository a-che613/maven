import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { userEmail, cart, total } = await request.json();

    // Create reusable transporter object using Gmail SMTP
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'codecamp316@gmail.com', // Your Gmail address
        pass: 'rsqwmyyjlwedahmc', // Your app password
      },
    });

    // Format cart items for email
    const cartItems = cart.map((item: any) => 
      `${item.quantity}x ${item.name} - $${item.price.toFixed(2)} each`
    ).join('\n');

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Maven Order System" <noreply@maven.com>',
      to: 'azienwi.che@gmail.com',
      subject: 'New Order Request',
      text: `New order request from: ${userEmail}

Items Ordered:
${cartItems}

Total: $${total.toFixed(2)}

Please contact the customer to complete the transaction.`,
      html: `
        <h1>New Order Request</h1>
        <p><strong>Customer Email:</strong> ${userEmail}</p>
        <h3>Items Ordered:</h3>
        <ul>
          ${cart.map((item: any) => 
            `<li>${item.quantity}x ${item.name} - $${item.price.toFixed(2)} each</li>`
          ).join('')}
        </ul>
        <h3>Total: $${total.toFixed(2)}</h3>
        <p>Please contact the customer to complete the transaction.</p>
      `,
    });

    console.log('Message sent: %s', info.messageId);
    
    // Clear the cart after successful checkout
    const response = NextResponse.json({ success: true });
    response.cookies.set('cart', '[]', { path: '/' });
    return response;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to process checkout' },
      { status: 500 }
    );
  }
}

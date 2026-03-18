import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Web3Forms - Free email service (get your key at https://web3forms.com)
    // Replace YOUR_ACCESS_KEY with your actual key
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY"

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        from_name: `${firstName} ${lastName}`,
        email: email,
        phone: phone || "Not provided",
        subject: subject,
        message: message,
        // This customizes the email you receive
        botcheck: false,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" })
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

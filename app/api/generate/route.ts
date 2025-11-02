// app/api/generate/route.ts
export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);

  const length = parseInt(searchParams.get("length") || "12");
  const includeNumbers = searchParams.get("numbers") === "true";
  const includeSymbols = searchParams.get("symbols") === "true";
  const includeUppercase = searchParams.get("uppercase") === "true";
  const includeLowercase = searchParams.get("lowercase") === "true";

  let chars = "";
  if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) chars += "0123456789";
  if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (!chars) {
    return Response.json(
      { error: "Select at least one character type." },
      { status: 400 }
    );
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return Response.json({ password });
}

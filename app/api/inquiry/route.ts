export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const type = String(body.type || "").trim();
    const message = String(body.message || "").trim();
    if (!name || !phone || !type) return Response.json({ message: "请填写姓名、联系电话和项目方向。" }, { status: 400 });
    console.log(JSON.stringify({ event: "rise_inquiry", name, phone, type, message, receivedAt: new Date().toISOString() }));
    return Response.json({ message: "需求已提交，我们会尽快与您联系。也可以直接拨打 +86 577 6278 8168。" });
  } catch {
    return Response.json({ message: "提交格式有误，请稍后再试或直接电话联系。" }, { status: 400 });
  }
}


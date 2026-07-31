"use client";

import { FormEvent, useState } from "react";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "提交失败");
      form.reset();
      setStatus("success");
      setMessage(result.message || "已收到您的需求，我们会尽快联系您。");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "暂时无法提交，请直接电话或邮件联系。");
    }
  }

  return <form className="inquiry-form" onSubmit={submit} noValidate>
    <label>您的姓名<input name="name" placeholder="请输入姓名" required /></label>
    <label>联系电话<input name="phone" placeholder="请输入电话或微信" required /></label>
    <label>项目方向<select name="type" defaultValue="" required><option value="" disabled>请选择项目方向</option><option>新能源项目</option><option>低压成套配电</option><option>储能控制系统</option><option>电能质量治理</option><option>渠道与 OEM</option></select></label>
    <label>项目需求<textarea name="message" rows={5} placeholder="请简单描述产品、数量、交期或现场情况" /></label>
    <button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "提交中…" : "发送项目需求"} <span aria-hidden="true">→</span></button>
    {message && <p className={`form-status ${status}`} role="status">{message}</p>}
  </form>;
}


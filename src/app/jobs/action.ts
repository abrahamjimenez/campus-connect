export async function jobAction(formData: FormData) {
  console.log("action", formData.get("title"));
  console.log("action", formData.get("description"));
  console.log("action", formData.get("price"));
  console.log("action", formData.get("date"));
  console.log("action", formData.get("image"));
  console.log("action", formData.get("freshman"));
  console.log("action", formData.get("sophomore"));
  console.log("action", formData.get("junior"));
  console.log("action", formData.get("senior"));
  console.log("action", formData.get("skills"));
}

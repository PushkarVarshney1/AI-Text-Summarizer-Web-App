export function countWords(str) {
  const t = str.trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

export const SAMPLE_TEXT =
  "The rapid adoption of remote work since 2020 has fundamentally reshaped how companies think about office space, employee productivity, and organizational culture. Studies from multiple research institutions indicate that hybrid work models, where employees split time between home and office, tend to outperform both fully remote and fully in-office arrangements on measures of employee satisfaction and retention. However, fully remote teams often report higher individual productivity on focused tasks, while in-office teams show stronger results on collaborative, creative work that benefits from spontaneous interaction. Companies are increasingly investing in asynchronous communication tools, redesigning offices around collaboration rather than individual desks, and rethinking performance metrics to focus on outcomes rather than hours logged. Critics argue that remote work can erode mentorship opportunities for junior employees and make it harder to build organizational culture, while advocates point to reduced commuting time, lower real estate costs, and access to a broader talent pool unconstrained by geography. As the labor market continues to evolve, most analysts expect a durable shift toward flexibility rather than a full return to pre-2020 norms, with the specific balance varying significantly by industry, role, and company size.";

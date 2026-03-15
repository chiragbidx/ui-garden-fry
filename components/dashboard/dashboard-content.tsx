"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Circle,
  DollarSign,
  FolderKanban,
  Mail,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type Metric = {
  label: string;
  value: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
};

type OnboardingStep = {
  title: string;
  description: string;
  href: string;
  done: boolean;
};

type ActivityItem = {
  title: string;
  detail: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
};

type MockProject = {
  id: string;
  name: string;
  owner: string;
  status: string;
};

const metrics: Metric[] = [
  { label: "Campaigns Sent", value: "175,800+", trend: "+12.7%", icon: Mail, description: "vs last month" },
  { label: "Active Subscribers", value: "12,340", trend: "+8.1%", icon: Users, description: "vs last month" },
  { label: "Open Rate", value: "37.4%", trend: "+2.4%", icon: TrendingUp, description: "vs last month" },
  { label: "Revenue", value: "$17,420", trend: "+16.2%", icon: DollarSign, description: "vs last month" },
];

const onboardingSteps: OnboardingStep[] = [
  { title: "Create your first campaign", description: "Design and send your first email blast.", href: "#", done: false },
  { title: "Import your list", description: "Add contacts for targeted sends.", href: "#", done: false },
  { title: "Explore analytics", description: "See reports on opens, clicks, and growth.", href: "#", done: false },
  { title: "Invite a collaborator", description: "Share your campaign with a teammate.", href: "/dashboard/team", done: false },
];

const recentActivity: ActivityItem[] = [
  { title: "Campaign sent", detail: "Welcome Email to 542 contacts", time: "3 min ago", icon: Mail },
  { title: "List imported", detail: "newsletter_subs.csv (2300 contacts)", time: "28 min ago", icon: Users },
  { title: "Open rate spiked", detail: "Summer Promo: 49.2% open rate", time: "1 hr ago", icon: TrendingUp },
  { title: "Account upgraded", detail: "Pro Plan activated", time: "2 hr ago", icon: DollarSign },
  { title: "User joined", detail: "sofia@acme.com added as collaborator", time: "3 hr ago", icon: Users },
];

const quickActions = [
  { label: "Create Campaign", href: "#", icon: Mail },
  { label: "Import List", href: "#", icon: Users },
  { label: "Analytics", href: "#", icon: Activity },
];

const weeklyData = [
  { day: "Mon", users: 89, revenue: 610 },
  { day: "Tue", users: 127, revenue: 920 },
  { day: "Wed", users: 52, revenue: 480 },
  { day: "Thu", users: 180, revenue: 1260 },
  { day: "Fri", users: 112, revenue: 800 },
  { day: "Sat", users: 34, revenue: 230 },
  { day: "Sun", users: 21, revenue: 170 },
];

const monthlyRevenue = [
  { month: "Jan", value: 8700 },
  { month: "Feb", value: 11400 },
  { month: "Mar", value: 13200 },
  { month: "Apr", value: 9000 },
  { month: "May", value: 17200 },
  { month: "Jun", value: 16300 },
  { month: "Jul", value: 23100 },
  { month: "Aug", value: 24200 },
  { month: "Sep", value: 19700 },
  { month: "Oct", value: 26700 },
  { month: "Nov", value: 23800 },
  { month: "Dec", value: 17420 },
];

const initialMockProjects: MockProject[] = [
  { id: "p-1", name: "Welcome Series", owner: "Chirag", status: "Draft" },
  { id: "p-2", name: "July Promo", owner: "Chirag", status: "Scheduled" },
  { id: "p-3", name: "Newsletter #8", owner: "Chirag", status: "Sent" },
];

function BarChart({ data }: { data: typeof weeklyData }) {
  const maxUsers = Math.max(...data.map((d) => d.users));

  return (
    <div className="space-y-2">
      <div className="flex items-end gap-1.5 h-[140px]">
        {data.map((d) => {
          const height = (d.users / maxUsers) * 100;
          return (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] text-muted-foreground font-medium">{d.users}</span>
              <div
                className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary min-h-[4px]"
                style={{ height: `${height}%` }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-1.5">
        {data.map((d) => (
          <div key={d.day} className="flex-1 text-center text-[10px] text-muted-foreground">
            {d.day}
          </div>
        ))}
      </div>
    </div>
  );
}

function AreaChart({ data }: { data: typeof monthlyRevenue }) {
  const maxVal = Math.max(...data.map((d) => d.value));
  const minVal = Math.min(...data.map((d) => d.value)) * 0.8;
  const range = maxVal - minVal;
  const w = 400;
  const h = 140;
  const padding = 4;

  const points = data.map((d, i) => ({
    x: padding + (i / (data.length - 1)) * (w - padding * 2),
    y: h - padding - ((d.value - minVal) / range) * (h - padding * 2),
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${h} L ${points[0].x} ${h} Z`;

  return (
    <div className="space-y-2">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[140px]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#areaGradient)" />
        <path d={linePath} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round" />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="flex justify-between px-1">
        {data.filter((_, i) => i % 2 === 0).map((d) => (
          <span key={d.month} className="text-[10px] text-muted-foreground">{d.month}</span>
        ))}
      </div>
    </div>
  );
}

function matchesQuery(query: string, ...fields: string[]): boolean {
  const q = query.toLowerCase();
  return fields.some((f) => f.toLowerCase().includes(q));
}

export function DashboardContent({ greeting, firstName }: { greeting: string; firstName: string }) {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState<MockProject[]>(initialMockProjects);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<MockProject | null>(null);

  const filteredMetrics = useMemo(
    () => (query ? metrics.filter((m) => matchesQuery(query, m.label, m.value, m.description)) : metrics),
    [query]
  );

  const filteredSteps = useMemo(
    () => (query ? onboardingSteps.filter((s) => matchesQuery(query, s.title, s.description)) : onboardingSteps),
    [query]
  );

  const filteredActivity = useMemo(
    () => (query ? recentActivity.filter((a) => matchesQuery(query, a.title, a.detail)) : recentActivity),
    [query]
  );

  const showMetrics = filteredMetrics.length > 0;
  const showOnboarding = filteredSteps.length > 0;
  const showCharts = !query || matchesQuery(query, "performance", "chart", "graph", "revenue", "engagement", "weekly", "monthly");
  const showActivity = filteredActivity.length > 0;
  const showCrudExample =
    !query || matchesQuery(query, "crud", "dialog", "modal", "project", "create", "edit");
  const noResults = !showMetrics && !showOnboarding && !showCharts && !showActivity && !showCrudExample;

  function openCreateDialog() {
    setEditingProject(null);
    setDialogOpen(true);
  }

  function openEditDialog(project: MockProject) {
    setEditingProject(project);
    setDialogOpen(true);
  }

  function handleSaveProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const owner = String(formData.get("owner") ?? "").trim();
    const status = String(formData.get("status") ?? "").trim();

    if (!name || !owner || !status) return;

    if (editingProject) {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === editingProject.id
            ? { ...project, name, owner, status }
            : project
        )
      );
    } else {
      setProjects((prev) => [{ id: `p-${Date.now()}`, name, owner, status }, ...prev]);
    }

    setDialogOpen(false);
  }

  return (
    <>
      {/* Welcome banner */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {greeting}, {firstName}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Welcome to your Mailvibe dashboard. Launch a campaign and grow your audience!
            </p>
          </div>
          <div className="flex items-center gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-1.5"
                  disabled={action.href === "#"}
                >
                  <Link href={action.href}>
                    <Icon className="size-3.5" />
                    <span className="hidden sm:inline">{action.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="relative w-full max-w-lg">
          <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search campaigns, lists, analytics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 h-10 bg-muted/50 border-muted-foreground/15 focus-visible:border-border focus-visible:bg-background"
          />
        </div>
      </div>

      {noResults && (
        <Card className="mb-8">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Mail className="size-10 text-muted-foreground/30 mb-3" />
            <p className="text-sm font-medium">No results found</p>
            <p className="text-xs text-muted-foreground mt-1">
              Try a different search term or clear the filter.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Metric cards */}
      {showMetrics && (
        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filteredMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardDescription className="text-sm font-medium">{metric.label}</CardDescription>
                  <div className="rounded-md bg-muted p-2">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold tracking-tight">{metric.value}</div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <Badge
                      variant="secondary"
                      className="rounded-md px-1.5 py-0 text-xs font-medium text-emerald-700 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/15 border-0"
                    >
                      {metric.trend}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{metric.description}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Middle section */}
      {(showOnboarding || showCharts) && (
        <div className="mb-8 grid gap-6 lg:grid-cols-5">
          {showOnboarding && (
            <Card className="lg:col-span-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Get Started with Mailvibe</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    0 / {onboardingSteps.length}
                  </Badge>
                </div>
                <CardDescription>Follow these steps to send your first campaign.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                {filteredSteps.map((step) => (
                  <Link
                    key={step.title}
                    href={step.href}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                  >
                    {step.done ? (
                      <CheckCircle2 className="size-[18px] shrink-0 text-emerald-500" />
                    ) : (
                      <Circle className="size-[18px] shrink-0 text-muted-foreground/40" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium leading-none">{step.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}

          {showCharts && (
            <Card className={showOnboarding ? "lg:col-span-3" : "lg:col-span-5"}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base">Weekly Campaigns Sent</CardTitle>
                    <CardDescription>Campaigns sent, new subscribers each day</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs font-medium">
                    1,075 total
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <BarChart data={weeklyData} />
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Revenue chart */}
      {showCharts && (
        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue for growth tracking</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold tracking-tight">$17,420</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">+16.2% from last month</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <AreaChart data={monthlyRevenue} />
            </CardContent>
          </Card>
        </div>
      )}

      {showCrudExample && (
        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-base">Campaign Projects</CardTitle>
                  <CardDescription>
                    Create and update your campaigns (demo local projects)
                  </CardDescription>
                </div>
                <Button size="sm" onClick={openCreateDialog}>
                  Create campaign
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between rounded-md border border-border/70 p-3"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{project.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Owner: {project.owner} • Status: {project.status}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(project)}
                    >
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingProject ? "Edit campaign" : "Create campaign"}
                </DialogTitle>
                <DialogDescription>
                  This is demo campaign data (local state). All real campaigns are managed in the backend.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSaveProject} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Campaign name</Label>
                  <Input
                    id="project-name"
                    name="name"
                    defaultValue={editingProject?.name ?? ""}
                    placeholder="New subscriber welcome"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-owner">Owner</Label>
                  <Input
                    id="project-owner"
                    name="owner"
                    defaultValue={editingProject?.owner ?? ""}
                    placeholder="Chirag"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-status">Status</Label>
                  <Input
                    id="project-status"
                    name="status"
                    defaultValue={editingProject?.status ?? "Draft"}
                    placeholder="Draft"
                    required
                  />
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? "Save changes" : "Create"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {/* Activity feed */}
      {showActivity && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Recent Activity</CardTitle>
                <CardDescription>Latest campaign and account events</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1.5 text-xs" disabled>
                View all
                <ArrowUpRight className="size-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {filteredActivity.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={`${item.title}-${item.time}`}>
                    <div className="flex items-center gap-4 py-3">
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    {i < filteredActivity.length - 1 ? <Separator /> : null}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
import { DashboardCarosuel, PostCard, PostStatusBar } from "@/components";
import Page from "@/components/layout/Page";

const Dashboard = () => {
  return (
    <Page>
      <DashboardCarosuel />
      <PostStatusBar />
      <PostCard />
    </Page>
  );
};

export default Dashboard;

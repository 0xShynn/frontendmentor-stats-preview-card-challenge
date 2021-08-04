import './App.css';
import PreviewCard from './components/PreviewCard';
import StatsItem from './components/StatsItem';
import StatsItemContainer from './components/StatsItemContainer';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen px-8 py-20">
      <PreviewCard
        title={[
          'Get ',
          <span className="text-primary-accent" key="accent">
            insights
          </span>,
          ' that help your business grow.',
        ]}
        subtitle="Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency."
        image="bg-img-header-mobile md:bg-img-header-desktop"
      >
        <StatsItemContainer>
          <StatsItem subtitle="Companies" count="10k+" />
          <StatsItem subtitle="Templates" count="314" />
          <StatsItem subtitle="Queries" count="12M+" />
        </StatsItemContainer>
      </PreviewCard>
    </div>
  );
}

export default App;

import SidebarSection from './sidebarSection';

const SidebarSections = () => {
  return (
    <>
      <SidebarSection
        title="CONVENIENCE RETAIL"
        main="For C-Stores"
        items={{
          'Scan Data': { subtitle: 'Earn more from brands and customers.' },
          Engage: { subtitle: 'Unlock exclusive brand promotions.' },
          Pricing: { subtitle: '' },
        }}
      />

      <SidebarSection
        title="ENTERPRISE BRANDS"
        main="For Brands"
        items={{
          Insights: { subtitle: 'Rein in your customer understanding.' },
          'Engage for Brands': {
            subtitle: 'Direct strategic promos across c-stores.',
          },
        }}
      />
    </>
  );
};

export default SidebarSections;

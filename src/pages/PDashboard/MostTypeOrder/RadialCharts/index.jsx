import { ResponsiveRadialBar } from '@nivo/radial-bar';

const RadialCharts = ({ data }) => {
  return (
    <ResponsiveRadialBar
      data={data}
      valueFormat=">-.2f"
      endAngle={360}
      innerRadius={0.6}
      padding={0}
      cornerRadius={45}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors={data.map((i) => i.style)}
      colorBy="index"
      borderColor={{
        from: 'color',
        modifiers: [['brighter', '0']],
      }}
      tracksColor="#252836"
      enableRadialGrid={false}
      enableCircularGrid={false}
      radialAxisStart={null}
      circularAxisOuter={null}
      isInteractive={true}
      tooltip={({ bar }) => (
        <div
          style={{
            padding: 12,
            color: 'var(--colors-text-white)',
            background: 'var(--colors-bg-base)',
          }}>
          <span>{bar.groupId}</span>
          <br />
          <strong>Customers: {bar.data.y}</strong>
        </div>
      )}
      legends={false}
    />
  );
};

export default RadialCharts;

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '优质',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我们致力于为优质原创的理科题目提供良好的发布平台，所有题目都经过人工审核，保质保量。
      </>
    ),
  },
  {
    title: '共建',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我们欢迎愿意提供优质高中原创题的同学们加盟出题组，为卧软杯贡献力量。可以点击右上角按钮加入我们。
      </>
    ),
  },
  {
    title: '共享',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我们允许其他组织自由转载我们的题目，希望借助我们的题目促进教育公平和共享。可以打开我们的GitHub仓库查阅题目源文件。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

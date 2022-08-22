import { PLANET_LINK } from '@/constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = '鱼皮出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        /*修改页脚信息*/
        {
          /*key随便起,只要保证在该links中唯一即可*/
          key: 'planet',
          title: '知识星球',
          href: PLANET_LINK,
          /*blankTarget: 设置是当前页面打开,还是在新的页面打开*/
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '编程导航',
          href: 'https://www.code-nav.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />鱼皮 GitHub</>,
          href: 'https://github.com/961163289',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;

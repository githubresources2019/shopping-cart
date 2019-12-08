import React from "react";
import { MenuItems } from "../../data/menu-items";
import { connect } from "react-redux";
import { thunkActionCreator, login } from "../../actions";
import { config } from '../../data/config-properties';
import { withRouter } from 'react-router-dom';
import "./menu-list.css";

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: MenuItems,
      item: {
        name: props.location.pathname
      }
    };
  }

  onMenuClick = item => {
    this.props.history.push(item.name.toLowerCase())
    this.setState({ item: { name: item.name } });
    this.props.updateProductList(item.name,config.unsplash.PRODUCT_COUNT);
  };

  componentDidMount = () => {
    this.onMenuClick(this.state.item);
  };

  

  render() {
    return (
      <div className="menu-items">
        <h4 className="categories-title">Select Categories</h4>
        <div className="nav flex-column nav-pills">
          {this.state.menuItems.map(item => {
            return (
              <a
                className={(this.state.item.name === item.name ? "active":"inactive") + " nav-link"}
                key={item.id}
                onClick={() => this.onMenuClick(item)}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        
      </div>
    );
  }
}




const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps = {
  updateProductList: thunkActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuList));

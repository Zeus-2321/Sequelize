const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define('project', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'title cannot be null',
      },
      notEmpty: {
        msg: 'title cannot by empty',
      },
    }
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    validate: {
      isIn: {
        args: [[true, false]],
        msg: 'isFeatured value must be true or false',
      },
    }
  },
  productImage: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'productImage cannot be null',
      },
    }
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'price cannot be null',
      },
      isDecimal: {
        msg: 'price must be in Decimal',
      },
    }
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'shortDesc cannot be null',
      },
      notEmpty: {
        msg: 'shortDesc cannot by empty',
      },
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Description cannot be null',
      },
      notEmpty: {
        msg: 'Description cannot by empty',
      },
    }
  },
  productUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'productUrl cannot be null',
      },
      notEmpty: {
        msg: 'productUrl cannot by empty',
      },
      isUrl: {
        msg: 'Invalid productUrl string',
      },
    }
  },
  category: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'category cannot be null',
      },
    }
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'tags cannot be null',
      },
    }
  },
  createdBy: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  deletedAt: {
    type: DataTypes.DATE,
  }
}, {
  paranoid: true,
  freezeTableName: true,
  modelName: 'project'
})
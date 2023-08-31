module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { through: PostCategory, foreignKey: 'category_id', otherKey: 'post_id', as: 'posts'});
    models.BlogPost.belongsToMany(models.Category, { through: PostCategory, foreignKey: 'post_id', otherKey: 'category_id', as: 'categories'});
  };
  
  return PostCategory;
};
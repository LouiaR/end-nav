import db from "./navMenu";

const navDataFormated = [];
db.navCategories.map((item, index) => {
  const {
    category_path,
    url_path,
    children_data,
    dropdown_image_link,
    dropdown_image_link1,
    dropdown_image_link2,
    dropdown_image_link3,
    dropdown_image_link4,
    dropdown_image_title,
    dropdown_image_title1,
    dropdown_image_title2,
    dropdown_image_title3,
    dropdown_image_title4,
    dropdown_image_url,
    dropdown_image_url1,
    dropdown_image_url2,
    dropdown_image_url3,
    dropdown_image_url4,
  } = item;

  const hasChildren = children_data.length > 0;
  let col2 = [];
  let col1 = [];
  let col3 = [];
  navDataFormated[index] = {
    category_path,
    url_path,
    hasChildren,
    dropdown_image_link,
    dropdown_image_link1,
    dropdown_image_link2,
    dropdown_image_link3,
    dropdown_image_link4,
    dropdown_image_title,
    dropdown_image_title1,
    dropdown_image_title2,
    dropdown_image_title3,
    dropdown_image_title4,
    dropdown_image_url,
    dropdown_image_url1,
    dropdown_image_url2,
    dropdown_image_url3,
    dropdown_image_url4,
  };

  return item.children_data.map((sub) => {
    if (sub.is_column_header) {
      if (sub.url_path.includes("1")) {
        return (navDataFormated[index].column_1 = {
          ...navDataFormated[index].column_1,
          title: sub.custom_category_name,
        });
      }

      if (sub.url_path.includes("2")) {
        return (navDataFormated[index].column_2 = {
          ...navDataFormated[index].column_2,
          title: sub.custom_category_name,
        });
      }

      if (sub.url_path.includes("3")) {
        return (navDataFormated[index].column_3 = {
          ...navDataFormated[index].column_3,
          title: sub.custom_category_name,
        });
      }
    } else {
      if (sub.include_in_menu_column2) {
        if (sub.custom_category_name) {
          col2.push(sub.custom_category_name);
          return (navDataFormated[index].column_2 = {
            ...navDataFormated[index].column_2,
            subtitle: col2,
          });
        } else {
          col2.push(sub.name);
          return (navDataFormated[index].column_2 = {
            ...navDataFormated[index].column_2,
            subtitle: col2,
          });
        }
      } else if (sub.include_in_menu_column3) {
        if (!sub.name.includes("Column")) {
          col3.push(sub.name);
          return (navDataFormated[index].column_3 = {
            ...navDataFormated[index].column_3,
            subtitle: col3,
          });
        }
      } else {
        col1.push(sub.name);
        return (navDataFormated[index].column_1 = {
          ...navDataFormated[index].column_1,
          subtitle: col1,
        });
      }
    }
    return navDataFormated;
  });
});

export default navDataFormated;

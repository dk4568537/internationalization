import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
     
      <Select placeholder="Select language" onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="ur">Urdu</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </Select>
      <h1>{t("header.message")}</h1>
    </div>
  );
};

export default Header;

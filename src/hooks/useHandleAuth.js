import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthStatusFalse, setAuthStatusTrue } from "redux/auth/authActions";
import { getItemFromStorage } from "services/localStorageService";
import { authStorageKey } from "utils/config";

export const useHandleAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthorized = getItemFromStorage(authStorageKey);

    if (isAuthorized === true) {
      dispatch(setAuthStatusTrue());
    }
  }, []);

  useEffect(() => {
    const handleStorageChanges = () => {
      const isAuthorized = getItemFromStorage(authStorageKey);

      if (isAuthorized === true) {
        dispatch(setAuthStatusTrue());
      } else {
        dispatch(setAuthStatusFalse());
      }
    };

    window.addEventListener("storage", handleStorageChanges);

    return () => {
      window.removeEventListener("storage", handleStorageChanges);
    };
  }, [dispatch]);
};

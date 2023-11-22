type StorageKey = string;

class LocalStorageUtil {
  static set<T>(key: StorageKey, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error("Error setting localStorage", e);
    }
  }

  static get<T>(key: StorageKey): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (e) {
      console.error("Error getting item from localStorage", e);
      return null;
    }
  }

  static remove(key: StorageKey): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error("Error removing item from localStorage", e);
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error("Error clearing localStorage", e);
    }
  }
}

export default LocalStorageUtil;

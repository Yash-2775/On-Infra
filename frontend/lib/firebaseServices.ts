import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, auth, storage } from "./firebase";
import {
  CompanyInfoDoc,
  ServiceDoc,
  TeamMemberDoc,
  ClientLogoDoc,
  TestimonialDoc,
  HeroSlideDoc,
  ContactMessageDoc,
  SiteSettingsDoc,
  ServiceResponse,
} from "@/types";

// Helper to safely format error messages
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

// Generic converter helper
const createConverter = <T>() => ({
  toFirestore: (data: T): DocumentData => data as DocumentData,
  fromFirestore: (snapshot: QueryDocumentSnapshot): T => ({
    id: snapshot.id,
    ...snapshot.data(),
  }) as T,
});

// ============================================================================
// 1. COMPANY SERVICE (`company` collection)
// ============================================================================
export const companyService = {
  async getCompanyInfo(): Promise<ServiceResponse<CompanyInfoDoc>> {
    try {
      const docRef = doc(db, "company", "main");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } as CompanyInfoDoc };
      }
      return { success: false, error: "Company info document not found." };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async updateCompanyInfo(data: Partial<CompanyInfoDoc>): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "company", "main");
      await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 2. SERVICES SERVICE (`services` collection)
// ============================================================================
export const servicesService = {
  async getAllServices(): Promise<ServiceResponse<ServiceDoc[]>> {
    try {
      const colRef = collection(db, "services");
      const q = query(colRef, orderBy("order", "asc"));
      const snapshot = await getDocs(q);
      const services: ServiceDoc[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as ServiceDoc);
      return { success: true, data: services };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async getServiceById(id: string): Promise<ServiceResponse<ServiceDoc>> {
    try {
      const docRef = doc(db, "services", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } as ServiceDoc };
      }
      return { success: false, error: "Service not found." };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async createService(data: Omit<ServiceDoc, "id">): Promise<ServiceResponse<string>> {
    try {
      const colRef = collection(db, "services");
      const docRef = await addDoc(colRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true, data: docRef.id };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async updateService(id: string, data: Partial<ServiceDoc>): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "services", id);
      await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async deleteService(id: string): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "services", id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 3. TEAM SERVICE (`team` collection)
// ============================================================================
export const teamService = {
  async getAllTeamMembers(): Promise<ServiceResponse<TeamMemberDoc[]>> {
    try {
      const colRef = collection(db, "team");
      const q = query(colRef, orderBy("order", "asc"));
      const snapshot = await getDocs(q);
      const team: TeamMemberDoc[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as TeamMemberDoc);
      return { success: true, data: team };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async createTeamMember(data: Omit<TeamMemberDoc, "id">): Promise<ServiceResponse<string>> {
    try {
      const colRef = collection(db, "team");
      const docRef = await addDoc(colRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true, data: docRef.id };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async updateTeamMember(id: string, data: Partial<TeamMemberDoc>): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "team", id);
      await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async deleteTeamMember(id: string): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "team", id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 4. CLIENTS SERVICE (`clients` collection)
// ============================================================================
export const clientsService = {
  async getAllClients(): Promise<ServiceResponse<ClientLogoDoc[]>> {
    try {
      const colRef = collection(db, "clients");
      const snapshot = await getDocs(colRef);
      const clients: ClientLogoDoc[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as ClientLogoDoc);
      return { success: true, data: clients };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async createClient(data: Omit<ClientLogoDoc, "id">): Promise<ServiceResponse<string>> {
    try {
      const colRef = collection(db, "clients");
      const docRef = await addDoc(colRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true, data: docRef.id };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async deleteClient(id: string): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "clients", id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 5. TESTIMONIALS SERVICE (`testimonials` collection)
// ============================================================================
export const testimonialsService = {
  async getAllTestimonials(): Promise<ServiceResponse<TestimonialDoc[]>> {
    try {
      const colRef = collection(db, "testimonials");
      const snapshot = await getDocs(colRef);
      const testimonials: TestimonialDoc[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as TestimonialDoc);
      return { success: true, data: testimonials };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async createTestimonial(data: Omit<TestimonialDoc, "id">): Promise<ServiceResponse<string>> {
    try {
      const colRef = collection(db, "testimonials");
      const docRef = await addDoc(colRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true, data: docRef.id };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async deleteTestimonial(id: string): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "testimonials", id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 6. HERO SERVICE (`hero` collection)
// ============================================================================
export const heroService = {
  async getAllHeroSlides(): Promise<ServiceResponse<HeroSlideDoc[]>> {
    try {
      const colRef = collection(db, "hero");
      const q = query(colRef, orderBy("order", "asc"));
      const snapshot = await getDocs(q);
      const slides: HeroSlideDoc[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as HeroSlideDoc);
      return { success: true, data: slides };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async createHeroSlide(data: Omit<HeroSlideDoc, "id">): Promise<ServiceResponse<string>> {
    try {
      const colRef = collection(db, "hero");
      const docRef = await addDoc(colRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true, data: docRef.id };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async updateHeroSlide(id: string, data: Partial<HeroSlideDoc>): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "hero", id);
      await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async deleteHeroSlide(id: string): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "hero", id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 7. CONTACT MESSAGES SERVICE (`contact_messages` collection)
// ============================================================================
export const contactMessagesService = {
  async submitMessage(data: Omit<ContactMessageDoc, "id" | "createdAt">): Promise<ServiceResponse<string>> {
    try {
      const colRef = collection(db, "contact_messages");
      const docRef = await addDoc(colRef, {
        ...data,
        read: false,
        createdAt: serverTimestamp(),
      });
      return { success: true, data: docRef.id };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async getAllMessages(): Promise<ServiceResponse<ContactMessageDoc[]>> {
    try {
      const colRef = collection(db, "contact_messages");
      const q = query(colRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const messages: ContactMessageDoc[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as ContactMessageDoc);
      return { success: true, data: messages };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async markAsRead(id: string): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "contact_messages", id);
      await updateDoc(docRef, { read: true });
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async deleteMessage(id: string): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "contact_messages", id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 8. SETTINGS SERVICE (`settings` collection)
// ============================================================================
export const settingsService = {
  async getSettings(): Promise<ServiceResponse<SiteSettingsDoc>> {
    try {
      const docRef = doc(db, "settings", "global");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: { id: docSnap.id, ...docSnap.data() } as SiteSettingsDoc };
      }
      return { success: false, error: "Settings document not found." };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async updateSettings(data: Partial<SiteSettingsDoc>): Promise<ServiceResponse<void>> {
    try {
      const docRef = doc(db, "settings", "global");
      await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

// ============================================================================
// 9. AUTHENTICATION SERVICE
// ============================================================================
export const authService = {
  async login(email: string, password: string): Promise<ServiceResponse<User>> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, data: userCredential.user };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async logout(): Promise<ServiceResponse<void>> {
    try {
      await signOut(auth);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  onAuthChange(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, callback);
  },
};

// ============================================================================
// 10. FIREBASE STORAGE SERVICE
// ============================================================================
export const storageService = {
  async uploadFile(file: File, path: string): Promise<ServiceResponse<string>> {
    try {
      const storageRef = ref(storage, path);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      return { success: true, data: downloadUrl };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },

  async deleteFileByPath(path: string): Promise<ServiceResponse<void>> {
    try {
      const storageRef = ref(storage, path);
      await deleteObject(storageRef);
      return { success: true };
    } catch (err) {
      return { success: false, error: getErrorMessage(err) };
    }
  },
};

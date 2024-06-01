import { useCallback, useMemo } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";
import toast from "react-hot-toast";
import axios from "axios";

const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchUser } = useUser(userId);

  const loginModal = useLoginModal();

  const isFollowing = useMemo(() => {
    const list = currentUser?.currentUser?.followingIds || [];

    return list.includes(userId);
  }, [userId, currentUser?.currentUser?.followingIds]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser?.currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;
      if (isFollowing) {
        request = () => axios.delete("/api/follow", { data: { userId } });
      } else {
        request = () => axios.post("/api/follow", { userId });
      }

      await request();

      mutateCurrentUser();
      mutateFetchUser();

      toast.success(isFollowing ? "Unfollowed user" : "Followed user");
    } catch (error) {
      toast.error("Failed to follow user");
    }
  }, [
    currentUser?.currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchUser,
    loginModal,
  ]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;

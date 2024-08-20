import axios from "axios";

class FriendsHooks {

    private baseUrl = "http://localhost:8080/api";

    getFriends() {
      return axios.get(`${this.baseUrl}/friends`);
    }
    getAddressesByFriendId(id) {
    return axios.get(`${this.baseUrl}/friends/${id}/addresses`);
    }

}
export const friendHooks = new FriendsHooks();
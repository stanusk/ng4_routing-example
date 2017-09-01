
export class AuthService {
	private logedIn = false;

	logIn () {
		this.logedIn = true;
	}

	logOut () {
		this.logedIn = false;
	}

	isAuthenticated (): Promise<boolean> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.logedIn);
			}, 800);
		});
	}
}

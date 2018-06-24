import ServiceReponse from './../models/ServiceResponse';
import Post from '../models/Post';
import User from '../models/User';

export default class AppService {

    private static instance: AppService;

    public static getInstance = (): AppService => {
        if (!AppService.instance){
            AppService.instance = new AppService();
        }
        return AppService.instance;
    }

    public fetchPosts = async (): Promise<ServiceReponse<Post[]>> => {

        // Simulate real world delay call
        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        const posts = [];
        for (let i = 0; i < 10; i++){
            const post = Post.getDummyPost();
            post.id = i;
            posts.push(post);
        }

        return new ServiceReponse<Post[]>(posts);
    }

}
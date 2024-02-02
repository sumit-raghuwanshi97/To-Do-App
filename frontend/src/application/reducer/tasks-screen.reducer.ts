import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllTasks } from '../../infrastructure/api/task.api';
import { Task } from '../../domain/interface/task';


/**
 * Fetches hackathon feedbacks.
 * @returns {FeedbacksFetchedResponse | BaseResponse}
 */
export const fetchUserTasksThunk = createAsyncThunk<
  Task[]
>('taskScreen/fetchTasks', async () => {
  try {
    const response = await fetchAllTasks();
    return response;
  } catch (err: any) {
    throw err;
  }
});


// export const fetchHackathonRatingsThunk = createAsyncThunk<
//   RatingsFetchedResponse,
//   { hackathonId: string }
// >('hackathonScreen/fetchRatings', async ({ hackathonId }) => {
//   try {
//     const response = await fetchHackathonRatings(hackathonId);
//     return response;
//   } catch (err: any) {
//     throw err;
//   }
// });




// /**
//  * Fetches user feedback.
//  * @returns {FeedbackFetchedResponse | BaseResponse}
//  */
// export const fetchUserFeedbackThunk = createAsyncThunk<
//   FeedbackFetchedResponse,
//   { hackathonId: string }
// >('hackathonScreen/fetchUserFeedbackThunk', async ({ hackathonId }) => {
//   try {
//     const response = await fetchUserFeedback(hackathonId);
//     return response;
//   } catch (err: any) {
//     throw err;
//   }
// });

// /**
//  * Create feedback for hackathon.
//  * @returns {FeedbackCreatedResponse | BaseResponse}
//  */
// export const createFeedbackThunk = createAsyncThunk<
//   FeedbackCreatedResponse,
//   { feedback: FeedbackBase }
// >('hackathonScreen/createFeedbackThunk', async ({ feedback }) => {
//   try {
//     const response = await createFeedback(feedback);
//     return response;
//   } catch (err: any) {
//     throw err;
//   }
// });

// /**
//  * Update feedback Thunk.
//  * @returns {FeedbackCreatedResponse | BaseResponse}
//  */
// export const updateFeedbackThunk = createAsyncThunk<
//   FeedbackCreatedResponse,
//   { feedback: FeedbackBase; feedbackId: string }
// >('hackathonScreen/updateFeedbacksThunk', async ({ feedback, feedbackId }) => {
//   try {
//     const response = await updateFeedback(feedback, feedbackId);
//     return response;
//   } catch (err: any) {
//     throw err;
//   }
// });

// /**
//  * Delete feedback Thunk.
//  * @returns {FeedbackDeletedResponse | BaseResponse}
//  */
// export const deleteFeedbackThunk = createAsyncThunk<
//   FeedbackDeletedResponse,
//   { feedbackId: string }
// >('hackathonScreen/deleteFeedbacksThunk', async ({ feedbackId }) => {
//   try {
//     const response = await deleteFeedback(feedbackId);
//     return response;
//   } catch (err: any) {
//     throw err;
//   }
// });

// /**
//  * Like feedback Thunk.
//  * @returns {FeedbackLikedResponse | BaseResponse}
//  */
// export const likeFeedbackThunk = createAsyncThunk<
//   FeedbackLikedResponse,
//   { feedbackId: string }
// >('hackathonScreen/likeFeedbacksThunk', async ({ feedbackId }) => {
//   try {
//     const response = await likeFeedback(feedbackId);
//     return response;
//   } catch (err: any) {
//     throw err;
//   }
// });

// /**
//  * Dislike feedback Thunk.
//  * @returns {FeedbackLikedResponse | BaseResponse}
//  */
// export const dislikeFeedbackThunk = createAsyncThunk<
//   FeedbackLikedResponse,
//   { feedbackId: string }
// >('hackathonScreen/dislikeFeedbacksThunk', async ({ feedbackId }) => {
//   try {
//     const response = await dislikeFeedback(feedbackId);
//     return response;
//   } catch (err: any) {
//     throw err;
//   }
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: 'https://crud-boomerang-jkyvd.ondigitalocean.app',
    baseUrl:
      process.env.NODE_ENV !== "production" && process.env.REACT_APP_ENV !== "production"
        ? "http://localhost:5005"
        : "https://api.grupoguia.mx",

    prepareHeaders: async (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: [
    "incidents",
  ],

  // endpoints de propiedades
  endpoints: (build) => ({
    // consulta el inventario de los desarrollos
    getIncident: build.query({
      query: ({incident_id, contact_id}) => {
        return {
          url: `/incidents/${incident_id}/${contact_id}`,
          method: "GET",
        };
      },
      providesTags: (result, error, arg) =>
        result ? [{ type: "incidents" }] : [],
    }),
    getIncidentRefresh: build.mutation({
      query: ({incident_id, contact_id}) => {
        return {
          url: `/incidents/${incident_id}/${contact_id}`,
          method: "GET",
        };
      },
      providesTags: (result, error, arg) =>
        result ? [{ type: "incidents" }] : [],
    }),
  }),
});

export const {
  useGetIncidentQuery,
  useGetIncidentRefreshMutation
} = serviceApi;

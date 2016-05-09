class TripsController < ApplicationController

  def index
    gon.trips = Trip.all
  end

  def show
  	@trip = Trip.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @trip }
    end
  end

  def new
		@trip = Trip.new
  end

	def create
  	@trip = Trip.new(trip_params)

		if @trip.save
      respond_to do |format|
        format.html do
    			flash[:notice] = "Trip Successfully Added!"
    			redirect_to root_path
        end
        format.json { render json: { status: 200 } }
      end
		else
      respond_to do |format|
        format.html do
          flash[:notice] = @trip.errors.full_messages.join(". ")
          redirect_to new_trip_path
        end
        format.json { render json: { status: 500 } }
      end
		end
	end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
    flash[:notice] = 'Trip deleted.'
    redirect_to root_path
  end

  protected

  def trip_params
    params.require(:trip).permit(:title, :description, :longitude,
      :latitude, :area)
  end

end
